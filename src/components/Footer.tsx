import React from "react";

function Footer() {
  return (
    <>
      {/* CTA Section */}
      <div className="mt-32 w-full bg-slate-700 py-20 text-white">
        <div className="mx-auto max-w-screen-2xl px-5 sm:px-24">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="AI Film 3 Logo"
                className="w-[240px] shrink-0 object-contain md:w-[400px]"
              />
            </div>

            <div className="flex max-w-xl flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-slate-100">
                  Glendale, Arizona
                </h3>
                <p className="text-lg text-amber-400">
                  October 31 – November 2
                </p>
              </div>

              <p className="text-slate-200">
                Discover the AI Film and Art Festival, where we showcase the
                future of AI-driven filmmaking. Join us for a captivating blend
                of art, entertainment, and technological innovation. Celebrate
                the exciting possibilities of AI in film and creativity!
              </p>

              <div className="flex flex-col gap-4">
                <p className="text-lg font-medium text-amber-400">
                  All Tickets Available to Purchase ONLINE ONLY
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://lu.ma/8tqsb694"
                    className="rounded-lg bg-slate-100 px-6 py-3 text-center font-medium text-slate-800 transition-colors hover:bg-slate-200"
                  >
                    Buy In Person Tickets Now
                  </a>
                  <a
                    href="https://www.entertainmint.com/theaters/ai-film-3-festival"
                    className="rounded-lg bg-amber-500 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-amber-600"
                  >
                    Buy Virtual Tickets Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-black py-20 text-white">
        <div className="mx-auto max-w-screen-2xl px-5 sm:px-24">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-4">
            {/* About Section */}
            <div className="col-span-1 sm:col-span-2">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">AI Film 3</h2>
              <p className="mb-8 leading-relaxed text-gray-400">
                Join us for the third annual AI Film Festival in Glendale,
                Arizona. Experience the future of cinema through AI-generated
                films, artwork, and innovative storytelling.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-white transition-colors hover:text-gray-400"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white transition-colors hover:text-gray-400"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white transition-colors hover:text-gray-400"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#schedules"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Schedules
                  </a>
                </li>
                <li>
                  <a
                    href="#buy-tickets"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Buy Tickets
                  </a>
                </li>
                <li>
                  <a
                    href="#hotel"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Hotel
                  </a>
                </li>
                <li>
                  <a
                    href="#video-upload"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Video Upload
                  </a>
                </li>
                <li>
                  <a
                    href="#sponsors"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Sponsors
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Glendale, Arizona</li>
                <li>October 31 – November 2</li>
                <li>info@aifilm3.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between sm:flex-row">
              <p className="text-sm text-gray-400">
                © 2024 AI Film 3. All rights reserved.
              </p>
              <div className="mt-4 flex gap-6 sm:mt-0">
                <a
                  href="#privacy"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Terms of Service
                </a>
                <a
                  href="#cookie"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
