import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 via-red-500 to-sky-500 rounded-lg text-white">
                Uday's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid  grid-cols-1 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.javaprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Java Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uday's Blog
                </Footer.Link>
                <Footer.Link
                  href="/project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uday's Project
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="FollowUs" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Udaykalse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://twitter.com/sarcasticuk_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/uday-kalse-2a3687249/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
                <Footer.Link href="#">Help</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright
            href="#"
            by="Uday_kalse"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center ">
            <Footer.Icon
              href="https://github.com/Udaykalse"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/uday-kalse-2a3687249/"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://twitter.com/sarcasticuk_"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://www.instagram.com/_oye_uday?igsh=MWppdXllcXI3N3FlcA=="
              target="_blank"
              rel="noopener noreferrer"
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
