import Layout from "./../layouts/MainLayout";

export default function Footer() {
    return(
    <Layout>




<div className="footer">This footer will always be positioned at the bottom of the page, but <strong>not fixed</strong>.</div>
<style jsx>
{  `
.footer {
    position: relative;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: #efefef;
    text-align: center;
  }
`}
</style>
    </Layout>
    )
}