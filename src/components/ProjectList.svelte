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
    {#each content as {name, tech, content}}
      <li class="project">
        <div class="project-details">
          <div>
            <span class="project-name">{name}</span>
            &#65372;
            <span class="project-tech">{tech}</span>
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
