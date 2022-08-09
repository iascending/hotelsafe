# Hotelsafe

The application is a basic representation of a hotel safe where you input a PIN, the safe locks with the stored PIN and you open it again by inputting the correct PIN

## The rules: 

- PIN should be 4 digits
- PIN should show each digit in display on key press with a limit of 4
- Enter button should store the PIN code IF the safe is not currently locked
- If the safe is locked on enter, show an error message (eg. INVALID) in the display window
- If safe is open and PIN is a valid 4 digit value, save value to state and use that to update lock indicator light
- If safe is locked and PIN matches stored value, unlock and update indicator light and clear state value/display
- Currently open safe should display a green light, locked should display a red light
- CLR should clear the current display

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run jest tests

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
