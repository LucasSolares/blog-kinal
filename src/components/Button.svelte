<script>
    export let isOutlined = false
    export let content = 'This is a button'
    export let isUpper = true;
    export let width = 200;
    export let height = 40;
</script>

<style>
    .Button-filled {
        background-color: #FF023F;
        text-align: center;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 700;
        color: white;
        cursor: pointer;
    }

    .Button-outlined {
        background-color: transparent;
        border: 1px solid #FF023F;
        color: rgb(95, 95, 95);
    }

    .Button-filled:hover {
        background-color: rgb(211, 3, 51)
    }

    .Button-outlined:hover {
        background-color: #FF023F;
        color: white;
    }

    .Button-filled:active {
        background-color: rgb(161, 3, 40)
    }

    .Button-outlined:active {
        background-color: rgb(211, 3, 51);
    }

    .Button-upper {
        text-transform: uppercase;
    }
</style>

<div class="Button">
    <div class="Button-container">
        <button style={`width: ${width}px; height: ${height}px`} on:click class="Button-filled" class:Button-upper={isUpper} class:Button-outlined={isOutlined}>{content}</button>
    </div>
</div>