<script>
    export let title;
    export let src;
</script>
<div class="flex">
<div class="flex h-screen flex-1">
    <div class="m-auto p-20">

    <h1 class="text-7xl font-bold text-center center text-white">
        {title}
    </h1>

    </div>
</div>
<div class="flex h-screen flex-1">
    <img class="scale-75 drop-shadow-lg" src="{src}" alt="sugma"/>
</div>
</div>