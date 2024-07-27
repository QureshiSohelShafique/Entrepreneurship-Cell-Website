import { Link } from "react-router-dom";

// import responsive styles
import "./../styles/css/FooterStyle.css";

//social icon from react-icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const socials = [
    {
      name: "Facebook",
      link: "#",
      icon: (
        <FaFacebook
          style={{
            height: "1.5rem",
            width: "1.5rem",
          }}
        />
      ),
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/theugiindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: (
        <FaInstagram
          style={{
            height: "1.5rem",
            width: "1.5rem",
          }}
        />
      ),
    },
    {
      name: "LinkedIn",
      link: "#",
      icon: (
        <FaLinkedin
          style={{
            height: "1.5rem",
            width: "1.5rem",
          }}
        />
      ),
    },
  ];

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0A142F",
        padding: "1.5% 3%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1rem",
        alignItems: "center",
        margin: "2rem 0 0 0",
      }}
    >
      <h1
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        E Cell <span>UCER Naini</span>
      </h1>
      {/* menus */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="footer--block-links"
      >
        {menus.map((menu) => (
          <Link
            key={menu.name}
            style={{
              padding: "0.5rem 1rem",
              textDecoration: "none",
              fontWeight: "normal",
              color: "white",
            }}
            to={menu.link}
          >
            {menu.name}
          </Link>
        ))}
      </div>
      {/* socials */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {socials.map((social) => (
          <a
            key={social.name}
            style={{
              padding: "0.5rem 1rem",
              textDecoration: "none",
              fontWeight: "normal",
              color: "white",

              borderRadius: "0.2rem",
            }}
            href={social.link}
          >
            {social.icon}
          </a>
        ))}
      </div>
      {/* year */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontWeight: "normal",
          }}
        >
          &copy; {year} E Cell UCER Naini
        </p>
        {/* <p
          style={{
            color: "white",
          }}
        >
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a href="https://prashant-kumarr.netlify.app/">E Cell UCER Naini</a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
