import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log(stripe);
export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'usd',
        payment_method_types: [
          'giropay',
          'eps',
          'p24',
          'sofort',
          'sepa_debit',
          'card',
          'bancontact',
          'ideal'
        ]
      });
      const clientSecret = paymentIntent.client_secret;

      res.json({
        clientSecret: clientSecret
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
