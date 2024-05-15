<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

#[MongoDB\Document]
class Product
{
    #[MongoDB\Id]
    private string $id;

    #[MongoDB\Field(type: 'string')]
    private string $label;

    #[MongoDB\Field(type: 'string')]
    private string $description;

    #[MongoDB\Field(type: 'string')]
    private string $imageURL;

    #[MongoDB\Field(type: 'float')]
    private float $prix;

    #[MongoDB\Field(type: 'int')]
    private float $quantite;

    public function getId()
    {
        return $this->id;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function setLabel(string $label)
    {
        $this->label = $label;

        return $this;
    }
    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description)
    {
        $this->description = $description;

        return $this;
    }
    public function getImageURL(): string
    {
        return $this->imageURL;
    }

    public function setImageURL(string $imageURL)
    {
        $this->imageURL = $imageURL;

        return $this;
    }
    public function getprix(): float
    {
        return $this->prix;
    }

    public function setprix(float $prix)
    {
        $this->prix = $prix;

        return $this;
    }
    public function getQuantite(): int
    {
        return $this->quantite;
    }

    public function setQuantite(int $quantite)
    {
        $this->quantite = $quantite;

        return $this;
    }
}
