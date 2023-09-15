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
<div class="color black">
<h1 class="sticky top-0 z-50 text-white">Page {page}</h1>
</div>
<main class="relative overflow-hidden top-">
{#if page <= 1}
<div class="flex h-screen">
    <div class="m-auto">
<h1 class="text-9xl font-bold text-center center text-white">
    Fabian's amazing presentaion
</h1>
</div>
</div>
{/if}
{#if page == 2}
<Page2/>
{/if}
</main>

{:else}

<main class="relative overflow-hidden top-">
    <div class="m-auto">
        <h1 class="text-9xl font-bold text-center center text-white">
            You should listen to my presentaion instead of being on your phone dummy
        </h1>
</main>
{/if}  
  <style lang="postcss">
    main{
        margin-top: -24px;
    }
    :global(html) {
        background: #F15156;
        background: linear-gradient(90deg, #F15156 0%,#721121 100%);
        overflow-y: hidden;
    }
  </style>