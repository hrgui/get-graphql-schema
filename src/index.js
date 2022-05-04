const { getIntrospectionQuery, buildClientSchema, printSchema } = require("graphql");
const { request } = require("graphql-request");

const config = {
  descriptions: true,
  specifiedByUrl: false,
  directiveIsRepeatable: false,
  schemaDescription: true,
  inputValueDeprecation: true,
};

async function main() {
  const introspectionQuery = getIntrospectionQuery(config);
  const graphqlSchemaResponse = await request("http://localhost:4000/graphql", introspectionQuery);
  const clientSchema = buildClientSchema(graphqlSchemaResponse);
  console.log(printSchema(clientSchema));
}

main();
