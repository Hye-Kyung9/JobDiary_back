import axios from "axios";

export const worknet = async (req, res, next) => {
  let result = {
    ok: null,
    error: null,
  };

  const config = {
    method: "get",
    url: "https://openapi.work.go.kr/opi/opi/opia/wantedApi.do?authKey=WNL1TYI6B8EEDV4BS5BZ92VR1HK&callTp=L&returnType=XML&startPage=1&display=50&occupation=024",
    headers: {
      Cookie:
        "WMONID=NOCHoiJ1mQX; OPENAPISESSIONID=YCU5HW8oBCoErakpFSQS7xbq2TWOusEX5frhKxq_-HqTQ8gYEPtg!-214294304!-992808964",
    },
  };

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
