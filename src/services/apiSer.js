// export const URL_API = "https://products-api-gal.herokuapp.com";
export const URL_API = "http://localhost:3003";

export const doApiGet = async (_url) => {
  try {
    let resp = await fetch(_url);
    let data = await resp.json();
    return data;
  }
  catch (err) {
    console.log(err);
    alert("there problem , come back tommrow!")
    return err;
  }
}

export const doApiMethod = async (_url, _method, _body) => {
  try {
    let resp = await fetch(_url, {
      method: _method,
      body: JSON.stringify(_body),
      headers: {
        'auth-token': localStorage["token"],
        'content-type': "application/json"
      }
    })
    let data = await resp.json();
    return data;
  }
  catch (err) {
    console.log(err);
    alert("there problem , come back tommrow!")
    return err;
  }
}