## Création de projet — Règle obligatoire

Lors de la création de tout nouveau projet, tu DOIS systématiquement générer un devcontainer avant toute autre chose :

1. Créer `.devcontainer/devcontainer.json` adapté au stack détecté
2. Créer `.devcontainer/Dockerfile` si une image custom est nécessaire
3. Confirmer la création du devcontainer avant de continuer

### Structure minimale attendue
```json
{
  "name": "<nom-du-projet>",
  "image": "mcr.microsoft.com/devcontainers/<runtime>:latest",
  "features": {},
  "postCreateCommand": "",
  "customizations": {
    "vscode": {
      "extensions": []
    }
  }
}
```

Ne jamais initialiser un projet sans ce fichier. Si le type de projet est ambigu, demander le runtime avant de commencer.
