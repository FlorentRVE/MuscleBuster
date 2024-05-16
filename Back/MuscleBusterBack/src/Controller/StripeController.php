<?php

namespace App\Controller;

use App\Document\Commande;
use DateTime;
use Doctrine\ODM\MongoDB\DocumentManager;
use Stripe\StripeClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class StripeController extends AbstractController
{

    #[Route('/create-checkout-session', name: 'app_stripe')]
    public function createCheckoutSession(Request $request, DocumentManager $dm)
    {
        $data = json_decode($request->getContent(), true);
        $produit = $data['produit'];
        // dd($produit[0]['label']);

        $items = [];
        foreach ($produit as $item) {
            $items[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'images' => ['http://localhost:5173/' . $item['imageURL']],
                        'name' => $item['label'],
                    ],
                    'unit_amount' => $item['prix'] * 100,
                ],
                'quantity' => $item['quantite'],
            ];
        }

        $stripe = new StripeClient($_ENV['STRIPE_SECRET_KEY']);

        $checkout_session = $stripe->checkout->sessions->create([
            'customer_email' => 'lissedeinowe-8580@yopmail.com',
            'shipping_address_collection' => [
                'allowed_countries' => ['FR'],
            ],
            'line_items' => [$items],
            'mode' => 'payment',
            'success_url' => 'http://localhost:5173/success?mail=lissedeinowe-8580@yopmail.com',
            'cancel_url' => 'http://localhost:5173/catalogue',
        ]);

        $commande = new Commande();
        $commande->setMail($checkout_session['customer_details']['email']);
        $commande->setAdresse($checkout_session['customer_details']['address'] ?? '24 rue de la liberté');
        $commande->setTotal($checkout_session['amount_total']);
        $date = new \DateTime();
        $todayDate = $date->format('d-m-Y');
        $commande->setDate($todayDate);

        $dm->persist($commande);
        $dm->flush();

        return new JsonResponse($checkout_session->url);
    }
}
