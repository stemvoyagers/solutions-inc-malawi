const Map = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative w-full h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.188474154057!2d3.3569781741859823!3d6.6234955933707305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b931c7d760241%3A0x2574c9d09723d3f1!2sIdentiko+Integrated+Solutions!5e0!3m2!1sen!2sng!4v1717106108351!5m2!1sen!2sng"
          width="100%"
          height="20%"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>

      <div className="relative w-full h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31518.738576066913!2d7.459098683636199!3d9.078125469105212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a59102c5633%3A0x4b7627fed1c07365!2sOakland%20Centre!5e0!3m2!1sen!2sng!4v1723761502927!5m2!1sen!2sng"
          width="100%"
          height="20%"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;