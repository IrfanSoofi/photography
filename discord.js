window.onload = function () {
  let form = document.getElementById("contact-form");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let comments = document.getElementById("comments");

  function rdBtnValue() {
    let selected = document.getElementsByName("choice");
    for (var i = 0; i < selected.length; i++) {
      if (selected[i].checked) {
        return selected[i].value;
      }
    }
  }


  form.onsubmit = function (e) {
    e.preventDefault();
    var selection = rdBtnValue();
    sendToDiscord(name, email, phone, selection, comments);
  };
};

function sendToDiscord(name, email, phone, selection, comments) {
  let webhook = "https://discord.com/api/webhooks/914555449779552256/mZtYpfRZ2huWHZtNI6qa3_pgwEZg9sKemyG1b7H46LFEeATwv0UUYEi3Rbndt7_KB7KU"
  let body = {
    embeds: [
      {
        title: title: `You have a new message from ${name.value}`,
        description: `E-mail: ${email.value}\nPhone: ${phone.value}\nChoice: ${selection.value}\nMsg: ${comments.value}`,
      },
    ],
  };

  fetch(webhook,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}