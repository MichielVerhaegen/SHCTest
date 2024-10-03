

//test
const baseurl = "http://78.20.36.241:9000/api"
const baseUrlNonApi = "http://78.20.36.241:9000/"


const sendhoteldata = async (form) => {

  console.log("form")
  console.log(form)
  console.log("contract")
  console.log(form.Contract.value)
  const formdata = new FormData();
  formdata.append("file", form.Contract.value)

  const fileresponse = await fetch(baseurl + "/hotels/upload", {
    method: "POST",
    body: formdata,
  }).then(response => response.json()).then(result => {
    console.log(result)
    return result
  });


  console.log("fileresponse")
  console.log(fileresponse)

  const filename = fileresponse.filename;
  console.log(filename)


  const response = await fetch(baseurl + "/hotels/createhotel", {
    method: "POST",
    body: JSON.stringify({
      Name: form.Name,
      Description: form.Description,
      Contract: filename
    }),
    headers: {
      "Content-type": "application/json",
    }
  });


}

const getallhotels = () => {

  const hotel = fetch(baseurl + "/hotels", {
    method: "GET",
    headers: {
    }
  }).then(response => response.json()).then(result => {
    return result.items
  })
  return hotel;
}

const gethotel = async (id) => {
  const hotel = await fetch(baseurl + "/hotels/" + id, {
    method: "GET",
  }).then(response => { return response.json() })
  return hotel;
}

const getcontract = (pdfname) => {
  return baseUrlNonApi + pdfname;

}

const sendemployeedata = async (form) => {
  console.log({
    Firstname: form.firstname,
    Lastname: form.lastname,
    Huisnummer: form.huisnummer,
    AdressLine: form.adressLine,
    city: form.city,
    country: form.country,
    email: form.email,
    Number: form.number,
    Password: form.password
  });
  const response = await fetch(baseurl + "/employee/create", {
    method: "POST",
    body: JSON.stringify({
      Firstname: form.firstname,
      Lastname: form.lastname,
      Huisnummer: form.huisnummer,
      AdressLine: form.adressLine,
      city: form.city,
      country: form.country,
      email: form.email,
      Number: form.number,
      Password: form.password
    }),
    headers: {
      "Content-type": "application/json",
    }
  });
  console.log(response)
  return response;

}

const getemployees = async () => {
  const employee = await fetch("http://78.20.36.241:9000/api/employee", {
    method: "GET",
    headers: {
    }
  }).then(response => response.json())
  return employee;


}

const login = async (form) => {

  console.log("form")
  console.log(form)

  const response = await fetch(baseurl + "/auth", {
    method: "POST",
    body: JSON.stringify({
      Emailaddress: form.email,
      Password: form.password,
    }),
    headers: {
      "Content-type": "application/json",
    }
  });
  return response;


}

const tokencall = async (token) => {

  const response = await fetch(baseurl + "/auth/" + token, {
    method: "get"
  }).then(res => res.json()).then(body => body);
  return response

}

const checkin = async (token) => {
  console.log(token)


  return await fetch(baseurl + "/check", {
    method: "POST",
    headers: {
      "Token": "Bearer " + token,
    }
  }).then(response => response.json()).then(result => {

    return result
  });

}

const retrieveCheckinData = async (token)=>{

  return await fetch(baseurl + "/check", {
    method: "GET",
    headers: {
      "Token": "Bearer " + token,
    }
  }).then(response => response.json()).then(result => {

    return result
  });


}




export { sendhoteldata, getallhotels, gethotel, getcontract, sendemployeedata, getemployees, login, tokencall, checkin, retrieveCheckinData}