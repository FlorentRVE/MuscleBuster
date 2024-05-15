<?php

namespace App\Controller;

use App\Document\Product;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/product')]
class ProductController extends AbstractController
{
    #[Route('/new')]
    public function createNewProduct(DocumentManager $dm)
    {
        $product = new Product();
        $product->setName('A Foo Bar');
        $product->setPrice('19.99');

        $dm->persist($product);
        $dm->flush();

        return new Response('Created product id ' . $product->getId());
    }

    #[Route('/all')]
    public function getAllProduct(DocumentManager $dm)
    {
        $product = $dm->getRepository(Product::class)->findAll();

        $json = json_encode($product);

        // dd($product[0]);

        return new Response($json);
    }
}
