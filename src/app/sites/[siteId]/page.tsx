import styles from './page.module.css'

const DYNAMIC_CONTENT: {[index: string]:any} = {
  ['test1.localhost:3001']: "Localhost - test1",
  ['test1.spotlesslove.com']: "Spotless Love - test1",
  ['test1.shawn.co.il']: "Shawn.co.il - test1",
  default: "deafult - test1"
};

interface PageProps {
  params: {
    siteId: string;
  },
  searchParams: {
    ip: string;
    geo: string;
  }
}

export default function Home({params, searchParams}: PageProps) {
  const domain: string = params.siteId.replace('%3A', ':') || '';
  const content = (domain && DYNAMIC_CONTENT[domain]) || DYNAMIC_CONTENT.default;
  const ip = searchParams.ip;
  const geo = searchParams.geo;

  return (
    <main className={styles.main}>
      <h1>Template 1</h1>
      <ul>
        <li>Content: <b>{content}</b></li>
        <li>Domain: {domain}</li>
        <li>IP: {ip}</li>
        <li>GEO: <pre>{geo}</pre></li>
      </ul>
    </main>
  )
}
