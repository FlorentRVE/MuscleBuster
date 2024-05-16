<?php

namespace App\Document;

use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\DateTimeType;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Doctrine\ODM\MongoDB\Types\DateImmutableType;
use MongoDB\Collection as MongoDBCollection;

#[MongoDB\Document]
class Commande
{
    #[MongoDB\Id]
    private string $id;

    #[MongoDB\Field(type: 'string')]
    private string $adresse;

    #[MongoDB\Field(type: 'string')]
    private string $mail;

    #[MongoDB\Field(type: 'float')]
    private float $total;

    #[MongoDB\Field(type: 'string')]
    private string $date;

    public function getId()
    {
        return $this->id;
    }

    public function getMail(): string
    {
        return $this->mail;
    }

    public function setMail(string $mail)
    {
        $this->mail = $mail;
    } 

    public function getAdresse(): string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse)
    {
        $this->adresse = $adresse;
    } 

    public function getDate(): string
    {
        return $this->date;
    }

    public function setDate(string $date)
    {
        $this->date = $date;
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
