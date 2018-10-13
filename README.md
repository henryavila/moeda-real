# Campo de Moeda Real para laravel Nova

Mask field for brazilian currency

### Install

Run this command into your nova project:

`composer require stonkeep/moeda-real`

### Add it to your Nova Resource:

```php
use Stonkeep\MoedaReal\MoedaReal;

MoedaReal::make('Valor Total', 'valor_total'),
```
