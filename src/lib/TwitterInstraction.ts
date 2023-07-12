export default async function instr_twitter(type: string, action: string) {
    await fetch(`/api/twitter/${type}/${action}`, {
        method: "POST"
      })
}