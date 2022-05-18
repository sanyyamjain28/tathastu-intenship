function myFunction() {
    const name = document.getElementById("myName").value;
    const message = "Hey " + name + "! You have subscribed successfully";
    document.getElementById("subscribed").innerHTML = message;
  }