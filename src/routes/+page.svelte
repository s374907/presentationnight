<script>   
    import Page2 from "../slides/+2.svelte";
    $: outerWidth = 900;
    let page = 1
    function onKeyDown(e){
        if(e.keyCode == 39){
            page += 1
        }
        if(e.keyCode == 37){
            page -= 1
        }
    }
</script>
<svelte:window 
bind:outerWidth
on:keydown|preventDefault={onKeyDown} 
/>

{#if outerWidth > 800}
<h1>Page {page}</h1>
{#if page == 1}
<h1 class="text-3xl font-bold underline text-center center">
    Hello world!
</h1>
{/if}
{#if page == 2}
<Page2/>
{/if}
{:else}
<h1>you are on mobile</h1>
{/if}  
  <style lang="postcss">
    :global(html) {
        background: #F9C784;
        background: linear-gradient(120deg, #F9C784 0%, #FF8C42 100%);
    }
  </style>