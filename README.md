Reproduction repository for very slow key vault secret retrival.

With this code it takes 1:40.779 (m:ss.mmm) to get a secret.

## Setup

1. Create Key Vault resource with a secret named `test-secret`
2. Clone repo
3. Log in with Azure CLI or Azure PowerShell
4. Create `.env` with settings:

```
KEYVAULT_URI=[your keyvault ur]
```

`npm start`

For comparison uncomment the code for App Configuration. It seems to allways be fast.