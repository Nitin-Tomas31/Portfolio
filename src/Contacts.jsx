import React from 'react';

const Contact = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact Information</title>
      
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      
      {/* Bootstrap Icons for Icons */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Background and text color for the contact section */
            .contact-section {
              background-image: url('https://images.pexels.com/photos/1819654/pexels-photo-1819654.jpeg'); /* Background image */
              color: #fff; /* White text */
              padding: 50px 0;
            }
            
            .contact-details {
              display: flex;
              justify-content: start;
              align-items: center;
              flex-wrap: wrap;
            }

            .contact-item {
              display: flex;
              align-items: center;
              margin-right: 30px;
              margin-bottom: 20px;
            }

            .contact-item i {
              margin-right: 10px;
              font-size: 1.8rem;
            }

            .contact-item a {
              color: #fff;
              text-decoration: none;
              font-size: 1.2rem;
            }

            .contact-item a:hover {
              text-decoration: underline;
            }

            h2 {
              color: #fff; /* Ensure the heading is white */
              text-align: center;
              margin-bottom: 40px;
            }
          `,
        }}
      />
      
      <div className="contact-section">
        <div className="container">
          <h2>Connect with Me</h2>
          <div className="contact-details">
            <div className="contact-item">
              <i className="bi bi-telephone-fill" />
              <span>
                Phone: <a href="tel:+1234567890">+1 234 567 890</a>
              </span>
            </div>
            
            <div className="contact-item">
              <i className="bi bi-envelope-fill" />
              <span>
                Email:{" "}
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </span>
            </div>
            
            <div className="contact-item">
              <i className="bi bi-github" />
              <span>
                GitHub:{" "}
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername
                </a>
              </span>
            </div>
            
            <div className="contact-item">
              <i className="bi bi-instagram" />
              <span>
                Instagram:{" "}
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                  @yourusername
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bootstrap JS and dependencies */}
    </>
  );
};

export default Contact;
