let coin = {
  state: 0,
  flip: function () {
    if (Math.random() > 0.5) {
      this.state = 1;
    } else {
      this.state = 0;
    }
  },
  /* 1. Randomly set your coin object's "state" property to be either 
             0 or 1: use "this.state" to access the "state" property on this object.*/

  toString: function () {
    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
  },
  /* 2. Return the string "Heads" or "Tails", depending on whether
             "this.state" is 0 or 1. */

  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 1) {
      image.src = "../images/Tails.jpg";
    } else {
      image.src = "../images/Heads.jpg";
    }
    /* 3. Set the properties of this image element to show either face-up
             or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};

function display20Flips() {
  for (let counter = 1; counter < 20; counter += 1) {
    coin.toString();
    coin.flip();
    const newDiv = document.createElement("div");

    const newContent = document.createTextNode(coin.toString());

    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
  }
}

display20Flips();
