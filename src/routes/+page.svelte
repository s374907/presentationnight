<script>   
    import Page2 from "../slides/+2.svelte";
    $: outerWidth = 900;
    let page = 1
    function onKeyDown(e){
        if(e.keyCode == 39){
            page += 1
        }
        if(e.keyCode == 37  && (page-1) != 0){
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
<main class="relative overflow-hidden ">
{#if page <= 1}
<div class="flex h-screen">
    <div class="m-auto">
<h1 class="text-9xl font-bold text-center center text-white">
    Fabian's amazing presentation
</h1>
</div>
</div>
{/if}
{#if page == 2}
<Page2/>
{/if}
</main>

{:else}

<div class="relative overflow-hidden top-">
    <div class="m-auto">
        <h1 class="text-xl font-bold text-center center text-white">
            You should listen to my presentation instead of being on your phone dummy
        </h1>
    </div>
</div>
{/if}  
  <style lang="postcss">
    main{
        margin-top: -24px;
    }
    :global(html,body){height:100%;}
    :global(body) {
        background: #F15156;
        background: linear-gradient(90deg, #F15156 0%,#721121 100%);
        overflow-y: hidden;
        float: none !important;margin: 0 auto !important;
    }
  </style>