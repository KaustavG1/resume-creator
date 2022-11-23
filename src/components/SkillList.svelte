<script>
  export let header;
  export let content;
</script>

<section class="resume-section">
  <div class="section-header">{header}</div>
  <div class="skills">
    <table>
      {#each content as {name, content}}
        <tr>
          <td class="skill-type">{name}</td>
          <td>{content}</td>
        </tr>
      {/each}
    </table>
  </div>
</section>
