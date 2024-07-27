// import responsive styles
import "./../styles/css/PartnerStyle.css";

//import company images
import { images } from "./../constants";

const Partner = () => {
  const companies = [
    {
      name: "Company 1",
      logo: images.company1,
      link: "https://www.google.com",
    },
    {
      name: "Company 2",
      logo: images.company2,
      link: "https://www.google.com",
    },
    {
      name: "Company 3",
      logo: images.company3,
      link: "https://www.google.com",
    },
    {
      name: "Company 4",
      logo: images.company4,
      link: "https://www.google.com",
    },
    {
      name: "Company 5",
      logo: images.company5,
      link: "https://www.google.com",
    },
    {
      name: "Company 6",
      logo: images.company6,
      link: "https://www.google.com",
    },
    {
      name: "Company 7",
      logo: images.company7,
      link: "https://www.google.com",
    },
    {
      name: "Company 8",
      logo: images.company8,
      link: "https://www.google.com",
    },
    {
      name: "Company 9",
      logo: images.company9,

      link: "https://www.google.com",
    },
    {
      name: "Company 10",
      logo: images.company10,

      link: "https://www.google.com",
    },
    {
      name: "Company 11",
      logo: images.company11,

      link: "https://www.google.com",
    },
    {
      name: "Company 12",
      logo: images.company12,
      link: "https://www.google.com",
    },
    {
      name: "Company 13",
      logo: images.company13,
      link: "https://www.google.com",
    },
    {
      name: "Company 14",
      logo: images.company14,
      link: "https://www.google.com",
    },
    {
      name: "Company 15",
      logo: images.company15,
      link: "https://www.google.com",
    },
    {
      name: "Company 16",
      logo: images.company16,
      link: "https://www.google.com",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        padding: "0 3%",
      }}
    >
      <h1 className="partner-heading">Organisations we have partnered with</h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "50rem",
          color: "rgba(0, 0, 0, 0.5)",
        }}
      >
        Our partnerships with industry leaders, innovative startups, and
        visionary entrepreneurs allow us to create a dynamic ecosystem where
        ideas thrive and possibilities are limitless. Together, we push
        boundaries, challenge norms, and drive innovation to new heights{" "}
      </p>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          margin: "2rem 0",
        }}
      >
        {companies.map((company) => (
          <a
            key={company.name}
            href={company.link}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textDecoration: "none",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={company.logo}
              alt={company.name}
              style={{
                height: "6rem",
                width: "6rem",
                objectFit: "contain",
                background: "transparent",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partner;
