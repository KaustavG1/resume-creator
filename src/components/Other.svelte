<script>
  import { marked } from 'marked';
  import insane from 'insane';
  import allowedTags from "../constants/allowedTags"

  export let header;
  export let content;
</script>

<section class="resume-section">
  <div class="section-header">{header}</div>
  <ul class="responsibilities last">
    {#each content as otherDatum}
      <li>{@html insane(marked.parseInline(otherDatum), allowedTags)}</li>
    {/each}
  </ul>
</section>
