<script>
  import { marked } from 'marked';
  import insane from 'insane';
  import allowedTags from "../constants/allowedTags"

  export let header;
  export let content;
</script>

<section class="resume-section">
  <div class="section-header">{header}</div>
  <ul class="job-list">
    {#each content as {organisation, position, duration, location, content}}
      <li class="job">
        <div class="job-details">
          <div>
            <span class="org">{organisation}</span>
            &#65372;
            <span class="position">{position}</span>
          </div>
          <div>
            <span class="time">{duration}</span>
            <em>&#65372;</em>
            <span class="location">{location}</span>
          </div>
        </div>
        <ul class="responsibilities">
          {#each content as item}
            <li>{@html insane(marked.parseInline(item), allowedTags)}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</section>
