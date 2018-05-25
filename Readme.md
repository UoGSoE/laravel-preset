# Laravel Frontend Preset

Simple Laravel front-end preset. Strips out a few things we never really used and pulls in
[tailwind](https://tailwindcss.com/) and the [purgecss plugin](https://github.com/spatie/laravel-mix-purgecss) for
mix.

## Install

```
composer require uogsoe/soe-laravel-preset
```

## Usage

```
php artisan preset uogsoe
```

You'll have to make sure you've done an `npm install` before trying `npm run dev` etc.
