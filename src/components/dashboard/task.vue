<template>
    <tr>
        <th scope="row" class="py-2">{{ task }}</th>
        <td class="py-2">{{ dueDate }}</td>
        <td class="py-2"><span class="badge badge-pill badge-warning">{{ _progress }}</span></td>
        <td class="py-2"><span class="badge badge-pill badge-info"><i class="fas fa-user" aria-hidden="true"></i> {{ asigned }}</span></td>
        <td class="py-2">{{ msgs }} Msgs</td>
    </tr>
</template>

<script>
    export default {
        props: {
          task: String,
          dueDate: String,
          _progress: String,
          asigned: String,
          msgs: Number,
        }
    }
</script>