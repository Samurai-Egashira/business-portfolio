function ContactPoc() {
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe35GHz7iTveH5dINMO_NXWu45C7RyoqjEPanaakIdXtq8tDQ/viewform?embedded=true'

    const styles = {
        page: {
          maxWidth: '960px',
          margin: '0 auto',
          padding: '48px 24px',
        },
        title: {
          fontSize: '32px',
          marginBottom: '16px',
        },
        description: {
          marginBottom: '32px',
          lineHeight: 1.8,
        },
        formWrapper: {
          width: '100%',
          overflow: 'hidden',
        },
        iframe: {
          width: '100%',
          minHeight: '1000px',
          border: 'none',
        },
    }

return (
    <div style={styles.page}>
        <h1>お問い合わせフォーム(試作)</h1>
        <p>Googleフォームの埋め込み表示を確認するためのテストページです。</p>
        <iframe
        src={formUrl} 
        width="100%" 
        height="900" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
        title="お問い合わせフォーム"
        >
            読み込んでいます…
        </iframe>
    </div>
)
}

export default ContactPoc