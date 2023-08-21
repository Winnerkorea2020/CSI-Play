import Table from "@/components/Table";

const Dashboard = () => {
  return (
    <section className="card mt-2 flex-1">
      <div className="container mt-12 mx-auto md:px-6">
        <div className="flex justify-between items-center">
          <div className="main__box--title ">
            <h2 className="main__title">자유게시판</h2>
          </div>
        </div>
        {/* Table */}
        <Table />
      </div>
    </section>
  );
};

export default Dashboard;
