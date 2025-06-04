# 📌 InvoiceGo

**InvoiceGo** est une petite application web conçue pour aider les freelances et petites entreprises à créer, gérer et exporter leurs factures facilement.

## 🚀 Objectif
Créer une Web App simple qui permet de :
- Générer des factures via un formulaire
- Les exporter en PDF
- Les stocker dans une base de données
- Afficher la liste des factures enregistrées

## 🛠️ Stack Technique
- **Frontend** : Next.js 15 + Tailwind CSS
- **Backend** : API Routes de Next.js
- **Base de Données** : Supabase (PostgreSQL)
- **PDF** : `react-pdf` pour générer les fichiers PDF

## 🎯 MVP (Version Minimale)
- [x] Formulaire de création de facture
- [x] Génération PDF de la facture
- [x] Stockage dans Supabase
- [x] Affichage de la liste des factures

## 🔧 Fonctionnalités à venir
- Envoi des factures par email
- Suivi du statut de paiement (payé, en attente, en retard)
- Gestion des clients (contacts réutilisables)

## 🗂️ Modèle de Données (Supabase - Table `invoices`)
| Champ        | Type       | Description                    |
|--------------|------------|--------------------------------|
| `id`         | UUID       | Identifiant unique             |
| `client_name`| TEXT       | Nom du client                  |
| `amount`     | FLOAT      | Montant de la facture          |
| `description`| TEXT       | Détails de la facture          |
| `due_date`   | TIMESTAMP  | Date d'échéance                |
| `status`     | TEXT       | Statut (payé, en attente...)   |
| `pdf_url`    | TEXT       | Lien vers le PDF (optionnel)   |
| `created_at` | TIMESTAMP  | Date de création               |

## 📍 Prochaine étape
Configurer Supabase et développer le formulaire de création de facture.

---

> _Développé pour s’exercer sur un vrai projet fullstack pratique et réutilisable._
