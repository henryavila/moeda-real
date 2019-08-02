import money from 'v-money'

Nova.booting((Vue, router) => {

    Vue.use(money, {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false
    });


    Vue.filter('toCurrency', function (value) {
        if (typeof value !== "number") {
            return value;
        }
        var formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
        return formatter.format(value);
    });

    Vue.component('index-moeda-real', require('./components/IndexField'));
    Vue.component('detail-moeda-real', require('./components/DetailField'));
    Vue.component('form-moeda-real', require('./components/FormField'));
})
