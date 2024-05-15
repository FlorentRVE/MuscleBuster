<?php

namespace App\Controller;

use App\Document\Commande;
use App\Document\Product;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/commande')]
class CommandeController extends AbstractController
{
    #[Route('/new', methods: ['POST'])]
    public function postCommande(Request $request, DocumentManager $dm): Response
    {
        
        $data = json_decode($request->getContent(), true);

        $commande = new Commande();
        $commande->setNom($data['nom']);
        $commande->setAdresse($data['adresse']);
        $commande->setMail($data['mail']);

        $commande->setNomCarte($data['nomCarte']);
        $commande->setNumeroCarte($data['numeroCarte']);
        $commande->setMoisExpiration($data['moisExpiration']);
        $commande->setAnneeExpiration($data['anneeExpiration']);
        $commande->setCvv($data['cvv']);

        $commande->setCommandes($data['commandes']);
        $commande->setTotal($data['total']);

        // dd($commande);

        $dm->persist($commande);
        $dm->flush();

        return new Response('Commande ' . $commande->getId() . ' passée et stockée');
    }

}
