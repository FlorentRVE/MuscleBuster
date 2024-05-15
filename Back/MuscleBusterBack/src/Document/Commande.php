<?php

namespace App\Document;

use Doctrine\Common\Collections\Collection;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use MongoDB\Collection as MongoDBCollection;

#[MongoDB\Document]
class Commande
{
    #[MongoDB\Id]
    private string $id;

    #[MongoDB\Field(type: 'string')]
    private string $nom;

    #[MongoDB\Field(type: 'string')]
    private string $adresse;

    #[MongoDB\Field(type: 'string')]
    private string $mail;

    #[MongoDB\Field(type: 'string')]
    private string $nomCarte;

    #[MongoDB\Field(type: 'string')]
    private string $numeroCarte;

    #[MongoDB\Field(type: 'string')]
    private string $moisExpiration;

    #[MongoDB\Field(type: 'string')]
    private string $anneeExpiration;

    #[MongoDB\Field(type: 'string')]
    private string $cvv;

    // #[MongoDB\Field(type: 'collection')]
    private $commandes;

    #[MongoDB\Field(type: 'float')]
    private float $total;

    public function getId()
    {
        return $this->id;
    }

    public function getNom(): string
    {
        return $this->nom;
    }

    public function setNom(string $nom)
    {
        $this->nom = $nom;
    }

    public function getAdresse(): string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse)
    {
        $this->adresse = $adresse;
    }

    public function getMail(): string
    {
        return $this->mail;
    }

    public function setMail(string $mail)
    {
        $this->mail = $mail;
    }

    public function getNomCarte(): string
    {
        return $this->nomCarte;
    }

    public function setNomCarte(string $nomCarte)
    {
        $this->nomCarte = $nomCarte;
    }

    public function getNumeroCarte(): string
    {
        return $this->numeroCarte;
    }

    public function setNumeroCarte(string $numeroCarte)
    {
        $this->numeroCarte = $numeroCarte;
    }

    public function getMoisExpiration(): string
    {
        return $this->moisExpiration;
    }

    public function setMoisExpiration(string $moisExpiration)
    {
        $this->moisExpiration = $moisExpiration;
    }

    public function getAnneeExpiration(): string
    {
        return $this->anneeExpiration;
    }

    public function setAnneeExpiration(string $anneeExpiration)
    {
        $this->anneeExpiration = $anneeExpiration;
    }

    public function getCvv(): string
    {
        return $this->cvv;
    }

    public function setCvv(string $cvv)
    {
        $this->cvv = $cvv;
    }

    public function getCommandes()
    {
        return $this->commandes;
    }

    public function setCommandes( $commandes)
    {
        $this->commandes = $commandes;
    }

    public function getTotal(): float
    {
        return $this->total;
    }

    public function setTotal(float $total)
    {
        $this->total = $total;
    }
    
}
