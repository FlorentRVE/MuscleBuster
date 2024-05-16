<?php 

namespace App\Controller;

use App\Document\Commande;
use DateTime;
use Doctrine\ODM\MongoDB\DocumentManager;
use Stripe\StripeClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class StripeController extends AbstractController
{

    #[Route('/create-checkout-session', name: 'app_stripe')]
    public function createCheckoutSession(Request $request, DocumentManager $dm)
    {
        // $data = json_decode($request->getContent(), true);
        // $amount = $data['total'] * 100;
        // dd($amount);
        $amount = 50;

        $stripe = new StripeClient($_ENV['STRIPE_SECRET_KEY']);

        $checkout_session = $stripe->checkout->sessions->create([
            'customer_email' => 'lissedeinowe-8580@yopmail.com',
            'line_items' => [[
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'images' => ['http://localhost:5173/images/contact.png'],
                        'name' => 'Commande MuscleBuster',
                    ],
                    'unit_amount' => $amount * 100,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => 'http://localhost:5173/success?mail=lissedeinowe-8580@yopmail.com',
            'cancel_url' => 'http://localhost:5173/catalogue',
        ]);

        // dd($checkout_session);
        $commande = new Commande();
        $commande->setMail($checkout_session['customer_details']['email']);
        $commande->setAdresse($checkout_session['customer_details']['address'] ?? '24 rue de la liberté');
        $commande->setTotal($checkout_session['amount_total']);
        $date = new \DateTime();
        $todayDate = $date->format('Y-m-d');
        $commande->setDate($todayDate);

        $dm->persist($commande);
        $dm->flush();

        return $this->redirect($checkout_session->url);
        
    }
}