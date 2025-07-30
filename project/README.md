# 1. Generate the SSH key pair. # IMPORTANT: Replace the email address with your own. ssh-keygen -t rsa -b 4096 -C "your_email@example.com" # 2. Set the SSH agent service to start automatically. Get-Service -Name ssh-agent | Set-Service -StartupType Automatic # 3. Start the SSH agent service. Start-Service ssh-agent # 4. Add the private key to the agent. # You will be prompted for your passphrase if you set one. ssh-add ~\.ssh\id_rsa # 5. Copy the public key to your clipboard. Get-Content ~\.ssh\id_rsa.pub | Set-Clipboard # 6. Print a confirmation message. Write-Host "✅ Public key has been copied to your clipboard."



# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
