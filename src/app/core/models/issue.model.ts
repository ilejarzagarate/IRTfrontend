export class Issue{
    number: number | undefined;
    title: string | undefined;
    body: string | undefined;
    created_at: Date | undefined;
    closed_at: Date | undefined;
    html_url: string | undefined;
    draft: boolean | undefined;
}