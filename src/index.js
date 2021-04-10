module.exports = async function App(context) {
  await context.sendGenericTemplate([
    {
      title: "Welcome to shop",
      imageUrl: 'https://shop-ecommerces.herokuapp.com/images/promo/macbook-new.jpg',
      subtitle: "Shop",
      defaultAction: {
        type: 'web_url',
        url: 'https://shop-ecommerces.herokuapp.com/',
        messengerExtensions: true,
        webviewHeightRatio: 'tall',
        fallbackUrl: 'https://shop-ecommerces.herokuapp.com/',
      },
      buttons: [
        {
          type: 'postback',
          title: 'Start Chatting',
          payload: 'DEVELOPER_DEFINED_PAYLOAD',
        },
      ],
    },
  ]);
};
