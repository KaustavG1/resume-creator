<script>
  import insane from 'insane';

  import formatNumber from "../utils/formatNumber.js";
  import allowedTags from "../constants/allowedTags"

  export let name;
  export let contact;
  const number = formatNumber(contact.phone, contact.numberFormat)

  const getLinkedInElement = (uName) => {
    return `<a href='http://www.linkedin.com/in/${uName}'>linkedin.com/in/${uName}</a>`
  }

  const getWebsite = (site) => {
    const cleanedSite = site.includes('www') ? site.slice(4) : site
    return `<a href='http://www.${cleanedSite}'>${site}</a>`
  }
</script>

<section class="header">
  <div class='title'>{name}</div>
  <div class="spacer-10"></div>
  <div class="contact">
    <span><i class="icon fas fa-mobile"></i>&nbsp;{@html insane(number, allowedTags)}</span>
    <span><i class="icon fas fa-inbox"></i>&nbsp;{contact.email}</span>
    <span><i class="icon fab fa-linkedin"></i>&nbsp;{@html getLinkedInElement(contact.linkedin)}</span>
    <span><i class="icon fas fa-map-marker-alt"></i>&nbsp;{contact.location}</span>
    {#if contact.website}
      <span><i class="icon fas fa-globe"></i>&nbsp;{@html getWebsite(contact.website)}</span>
    {/if}
  </div>
</section>
