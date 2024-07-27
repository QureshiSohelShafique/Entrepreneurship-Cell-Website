//import contact from
import { ContactForm, LinkedInBadge } from "../components";

// import responsive styles
import "./../styles/css/ContactPage.css";

//import contact icons
import { BiLocationPlus } from "react-icons/bi";
import { RiGlobalLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const linkedinUser = [
    {
      link: "https://www.linkedin.com/in/sohel-qureshi-03552b213",
      name: "Qureshi Sohel Shafique",
      headline:
        " Skilled in MERN Stack, Java, Git ,Data Structure and Algorithms",
      location: "Allahabad Prayagraj, India",
      profileImage: "https://avatars.githubusercontent.com/u/96608616?v=4",
    },
  ];
  const contacts = [
    {
      icon: <BiLocationPlus />,
      title: "Address",
      description: "Nevada Samogar,dairy,United Naini, Prayagraj, Uttar Pradesh 211010",
    },
    {
      icon: <RiGlobalLine />,
      title: "Website",
      description: "https://www.united.ac.in/ucer/",
    },
    {
      icon: <HiOutlineMail />,
      title: "Email",
      description: "info@united.ac.in",
    },
    {
      icon: <HiOutlineMail />,
      title: "Email",
      description: "info@united.ac.in (ALD)",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5% 3%",
        gap: "2.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* <img
          src={images.logo}
          alt="logo"
          style={{
            width: "6rem",
            height: "6rem",
            marginTop: "1rem",
          }}
        /> */}
        <h1
          style={{
            textAlign: "center",
            margin: "0.5rem",
          }}
        >
          Contact
        </h1>
        <p
          style={{
            textAlign: "center",
            margin: "0",
          }}
        >
          We would love to hear from you! If you have any questions,
          suggestions, or feedback, please feel free to reach out to us using
          the contact information below.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2%",
          gap: "4%",
          backgroundColor: "white",
          borderRadius: "1.5rem",
          width: "100%",
        }}
        className="contact--block"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "2rem",
            backgroundColor: "#6854FC",
            padding: "4% 4% 6% 4%",
            borderRadius: "2rem",
          }}
          className="contact--block-info"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              gap: "1rem",
            }}
          >
            <p
              style={{
                margin: "0",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              Contact Information
            </p>
            <p
              style={{
                margin: "0",
                color: "#fff",
              }}
            >
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
          </div>
          <div className="contact--info-details">
            {contacts.map((contact, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  {contact.icon}
                </div>
                <p
                  style={{
                    margin: "0",
                    color: "#fff",
                  }}
                >
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
      {/* <Work /> */}
      <div
        style={{
          display: "flex",
          width: "80%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h1
          style={{
            margin: "0",
          }}
        >
          Reach us
        </h1>
        <p
          style={{
            textAlign: "center",
          }}
        >
          We are a team of passionate individuals who are working hard to
          provide the best platform for the students to learn and grow. We are
          always open to new ideas and suggestions. If you have any queries,
          feel free to reach out to us.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            width: "100%",
          }}
        >
          {linkedinUser.map((user) => (
            <LinkedInBadge
              key={user.name}
              link={user.link}
              name={user.name}
              headline={user.headline}
              location={user.location}
              profileImage={user.profileImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
