import React from "react";

// handleChange(e) {

// }

const ContactMe = () => {
  return (
    <div>
      <form>
        <p>Contact me by email or other web platforms!</p>
        <label className="">
          Name:
          <input placeholder="Your Name Here..." type="text" name="name" />
        </label>
        <label className="">
          Email:
          <input placeholder="Your Email Here..." type="email" name="email" />
        </label>
        <label className="">
          Leave a Message:
        <textarea placeholder="A Message perhaps?" type="text" name="message" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <a href="" >LinkedIn Link</a>
    </div>
  );
};
export default ContactMe;

// function ContactMe() {
//     return (
//       <div href="#nav3">
//         <p>email</p>
//         <p>Phone</p>
//         <p>LinkedIn</p>
//       </div>
//     )
// };

// export default ContactMe
