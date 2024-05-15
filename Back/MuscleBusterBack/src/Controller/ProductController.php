<?php

namespace App\Controller;

use App\Document\Product;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/produit')]
class ProductController extends AbstractController
{
    #[Route('/new')]
    public function createNewProduct(DocumentManager $dm)
    {
        $product = new Product();
        $product->setLabel('Creatine');
        $product->setDescription('Creatine MTX est un produit etc etc');
        $product->setImageURL('images/produit/CARNITINE.png');
        $product->setPrix(49.99);
        $product->setQuantite(1);

        $dm->persist($product);
        $dm->flush();

        return new Response('Created product id ' . $product->getId());
    }

    #[Route('/all')]
    public function getAllProduct(DocumentManager $dm, SerializerInterface $serializer): Response
    {
        $product = $dm->getRepository(Product::class)->findAll();

        $jsonContent = $serializer->serialize($product, 'json');

        return new Response($jsonContent);
    }
}
