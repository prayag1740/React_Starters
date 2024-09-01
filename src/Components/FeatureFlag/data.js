const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showQrCodeGenerator: false,
};

function fetchFeatureFlagsApiCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occured , please try again !!");
  });
}

export default fetchFeatureFlagsApiCall;
