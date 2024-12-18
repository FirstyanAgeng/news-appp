import { Alert, Card } from "antd";
import { useEffect, useState } from "react";

const Articles = () => {
  const [data, setData] = useState([]); //untuk menyimpan data
  const [loading, setLoading] = useState(false); //state loading
  const [error, setError] = useState(null); //state ketika error

  //   fetch data

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const apiKey = "pXoeHirdswj7Y4STH4IEBrrnzjJJgfqr";
        const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`;

        const response = await axios.get(url);
        setData(response.data.response.docs); //data yang disimpan dari api
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <Alert
        message="error"
        description={`something went wrong: ${error}`}
        type="error"
        showIcon
      />
    );
  }
  //   ketika muncul error maka menggunakan ini

  return (
    <div>
      <h1>article</h1>
      {/* loopin data dari api */}
      {data.map((article, index) => {
        return (
          <div>
            <Card>
              <h2>{article.title}</h2>
              <p>{article.abstract}</p>
              <img src={article.multimedia[0].url} alt={article.title} />
            </Card>
          </div>
        );
      })}
    </div>
  );
};
