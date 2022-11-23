<script>
  export let header;
  export let content;
</script>

<section class="resume-section">
  <div class="section-header">{header}</div>
  <table>
    {#each content as {duration, institute, degree, major, gpa}}
      <tr>
        <td class="duration">{duration}</td>
        <td class="university">{institute}</td>
        <td class="degree">{degree}&#65372;<span class="major">{major}</span></td>
        <td class="gpa">{gpa}</td>
      </tr>
    {/each}
  </table>
</section>
