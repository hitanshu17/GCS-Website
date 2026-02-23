import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SITE_NAME = "Gupta Cold Storage";
const ADDRESS = "PIAU MANIHARI, Narela, Sonipat, Haryana 131030";
const GST = "06AAKPG3276G1ZR";
const EMAIL = "anantagro777@gmail.com";
const SERVICES = "Cold Storage (Normal 0–25°C)";
const COMMODITIES = "Kiryana and Dry Fruits";

const COMMODITY_ITEMS = ["Kiryana items", "Spices", "Dry fruits and nuts"];

export default function Landing() {
  return (
    <main>
      <section
        id="home-section"
        className="bg-gray-50 pt-28 pb-16 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4 md:max-w-screen-md lg:max-w-screen-xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Cold Storage Solutions
              </p>
              <h1 className="mb-5 text-4xl font-semibold text-black dark:text-white lg:text-6xl">
                Safeguarding Freshness with Trust
              </h1>
              <p className="mb-6 text-lg text-black/70 dark:text-white/70">
                {SITE_NAME} provides reliable, temperature-controlled storage
                for businesses dealing in kiryana, spices, and premium dry
                fruits. We focus on safety, consistency, and long-term product
                quality.
              </p>
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {COMMODITY_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-white px-4 py-3 shadow-sm dark:bg-gray-900/60"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon icon="solar:box-bold" className="text-lg" />
                    </div>
                    <p className="text-sm font-medium text-black dark:text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#contact-section"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-primary/90"
                >
                  Book Storage Space
                  <Icon icon="tabler:chevron-right" className="ml-2 text-xl" />
                </Link>
                <Link
                  href="#about-section"
                  className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary/10"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:col-span-6">
              <div className="relative w-full max-w-xl overflow-hidden">
                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl border border-dashed border-primary/40" />
                <div className="absolute -bottom-8 -right-10 h-20 w-20 rounded-full bg-primary/10" />
                <Image
                  src="/images/hero/gcs-hero.png"
                  alt={`${SITE_NAME} cold storage facility`}
                  width={900}
                  height={650}
                  className="relative z-10 h-auto w-full rounded-3xl object-cover shadow-2xl"
                  priority
                />
                <div className="absolute bottom-4 left-4 z-20 rounded-2xl bg-white/90 px-5 py-3 text-sm shadow-lg backdrop-blur dark:bg-gray-900/90 dark:text-white">
                  <p className="font-semibold text-black dark:text-white">
                    Temperature range: 0°C – 25°C
                  </p>
                  <p className="text-black/60 dark:text-white/70">
                    Ideal for kiryana, spices, dry fruits & nuts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-section" className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-20 md:max-w-screen-md lg:max-w-screen-xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                About
              </p>
              <h2 className="text-3xl font-semibold text-black dark:text-white lg:text-4xl">
                Trusted partner for long-term cold storage needs.
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                {SITE_NAME} offers secure and hygienic storage infrastructure
                designed for wholesalers, traders, and businesses that require
                consistent temperature control. Our facility is optimized for
                commodities that cannot compromise on freshness or quality.
              </p>
              <p className="text-black/70 dark:text-white/70">
                From seasonal stock to year-round inventory, we help you manage
                your products efficiently with reliable operations, timely
                handling, and careful stacking of every consignment.
              </p>
            </div>
            <div className="space-y-6 rounded-3xl border border-primary/10 bg-primary/5 p-8 dark:bg-primary/10 lg:col-span-5 lg:col-start-8">
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                Facility Snapshot
              </h3>
              <ul className="space-y-3 text-black/80 dark:text-white/80">
                <li className="flex items-start gap-3">
                  <Icon
                    icon="solar:shield-check-bold"
                    className="mt-1 text-xl text-primary"
                  />
                  <p>Temperature-controlled chambers maintained between 0°C and 25°C.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="solar:box-minimalistic-bold"
                    className="mt-1 text-xl text-primary"
                  />
                  <p>Structured palletized storage for kiryana, spices, and dry fruits.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="solar:warehouse-bold"
                    className="mt-1 text-xl text-primary"
                  />
                  <p>Efficient loading/unloading to support quick vehicle turnaround.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services-section"
        className="border-y border-slate-200/60 bg-slate-50 dark:border-gray-700/60 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4 py-20 md:max-w-screen-md lg:max-w-screen-xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Services
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-black dark:text-white lg:text-4xl">
              Our specialized cold storage services.
            </h2>
            <p className="text-black/70 dark:text-white/70">
              We focus on providing stable, reliable storage conditions tailored
              to dry food commodities, ensuring your stock remains safe and
              market-ready.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white px-6 py-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon icon="solar:thermometer-bold" className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Temperature-Controlled
              </h3>
              <p className="text-black/70 dark:text-white/70">
                Storage space ranging from 0°C to 25°C to match the exact
                requirements of your commodities and prevent spoilage.
              </p>
            </article>
            <article className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white px-6 py-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon icon="solar:box-bold" className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Commodity Specialization
              </h3>
              <p className="text-black/70 dark:text-white/70">
                Ideal for bulk storage of kiryana items, spices, high-value dry
                fruits, and nuts with organized stacking and handling.
              </p>
            </article>
            <article className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white px-6 py-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon icon="solar:warehouse-bold" className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Rental Storage Services
              </h3>
              <p className="text-black/70 dark:text-white/70">
                Flexible rental options to match your seasonality and business
                cycles, with attentive monitoring of every consignment.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact-section" className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-20 md:max-w-screen-md lg:max-w-screen-xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Contact
              </p>
              <h2 className="text-3xl font-semibold text-black dark:text-white lg:text-4xl">
                Get in touch
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                Ready to secure your storage space? Reach out with your
                commodity type and approximate quantity and our team will assist
                you with availability and pricing.
              </p>
            </div>
            <div className="space-y-5 rounded-3xl border border-slate-200/70 bg-slate-50 p-8 dark:border-gray-700 dark:bg-gray-800 lg:col-span-5 lg:col-start-8">
              <ContactRow label="Name" value={SITE_NAME} />
              <ContactRow label="Location" value={ADDRESS} />
              <ContactRow label="Email" value={EMAIL} isEmail />
              <ContactRow label="GST" value={GST} />
              <ContactRow label="Services" value={SERVICES} />
              <ContactRow label="Commodities" value={COMMODITIES} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactRow({
  label,
  value,
  isEmail,
}: {
  label: string;
  value: string;
  isEmail?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
        {label}
      </span>
      {isEmail ? (
        <Link
          href={`mailto:${value}`}
          className="break-all text-base font-semibold text-primary hover:underline"
        >
          {value}
        </Link>
      ) : (
        <p className="text-base font-semibold text-black dark:text-white">
          {value}
        </p>
      )}
    </div>
  );
}
