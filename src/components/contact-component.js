function Contact() {
return(<>
<h1>Contact Us</h1>
<form>
<label htmlFor="full-name" >Full name: </label>
<input type="text" id="full-name" name="full-name" required />
<br />
<label htmlFor="email-address" >Email: </label>
<input type="email" id="email-address" name="email-address" required />
<br />
<label htmlFor="subject" >Subject: </label>
<input type="text" id="subject" name="subject" required />
<br />
<label htmlFor="message" >Message: </label>
<textarea id="message" name="message" rows="20" cols="100" >
</textarea>
<br />
<button type="submit" >Send</button>
</form>
</>);
}
export default Contact;